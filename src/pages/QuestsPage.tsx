import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import QuestsList from '../components/QuestsList';
import {filterOutline} from "ionicons/icons";
import QuestsFilter from "../components/QuestsFilter";
import {useState} from "react";

const QuestsPage: React.FC = () => {

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="primary" collapse>
                        <IonButton onClick={() => setIsFiltersOpen(true)}>
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
                            <IonButton onClick={() => setIsFiltersOpen(true)}>
                                <IonIcon slot="icon-only" icon={filterOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                        <IonTitle size="large">Квесты</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <QuestsList/>
                <QuestsFilter isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
            </IonContent>
        </IonPage>
    );
};

export default QuestsPage;
