import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import QuestsList from '../components/QuestsList';
import {filterOutline} from "ionicons/icons";

const QuestsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="primary" collapse>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={filterOutline}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Квесты</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="primary" collapse>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={filterOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                        <IonTitle size="large">Квесты</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <QuestsList/>
            </IonContent>
        </IonPage>
    );
};

export default QuestsPage;
