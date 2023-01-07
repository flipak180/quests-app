import {IonButtons, IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const QuestsCardPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" collapse>
                        <IonBackButton defaultHref="/quests"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Карточка квеста</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="start" collapse>
                            <IonBackButton defaultHref="/quests"></IonBackButton>
                        </IonButtons>
                        <IonTitle size="large">Карточка квеста</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default QuestsCardPage;
