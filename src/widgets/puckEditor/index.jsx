import {Puck, usePuck} from "@measured/puck";
import CustomButton from "../../shared/ui/Button";
import {config} from "./model";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useCreateArticle} from "../../shared/hooks";

export default function PuckEditor(props) {
    const navigate = useNavigate();
    const params = useParams();
    const [buttonLabel, setButtonLabel] = useState("Сохранить")
    const articleMutation = useCreateArticle()

    // Describe the initial data
    const initialData = {};

    // Save the data to your database
    const save = (data) => {
        console.log(data);
        articleMutation.mutate({
            chapterId: params.chapterId,
            article: {
                isEnabled: data.root.props.isEnabled,
                displayOrder: 2,
                title: data.root.props.title,
                content: data,
            },
        })
    };

    const goBack = () => {
        navigate(`/${params.chapterId}/articles`);
    }

    useEffect(() => {
        if (articleMutation.isPending) {
            setButtonLabel("Сохраняем..")
        }
        else {
            setButtonLabel("Сохранить")
        }
    }, [articleMutation.isPending])

    return (
        <Puck config={config}
              data={initialData}
              onPublish={save}
              iframe={{ enabled: false }}
              overrides={{
                  headerActions: ({ children }) => {

                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      const {appState} = usePuck();

                      return (
                          <>
                              <CustomButton
                                  onClick={() => {
                                      goBack();
                                  }}
                                  variant={"secondary"}
                              >
                                  Закрыть справку
                              </CustomButton>
                              <CustomButton
                                  onClick={() => {
                                      save(appState.data);
                                  }}
                                  variant={"primary"}
                              >
                                  {buttonLabel}
                              </CustomButton>
                          </>
                      );
                  },
              }}
        />
    )
}
