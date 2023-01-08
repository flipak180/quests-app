import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {
    IonAvatar,
    IonButton,
    IonButtons, IonContent,
    IonHeader, IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonModal, IonTitle,
    IonToolbar
} from '@ionic/react';

interface QuestsFilterProps {
    isOpen?: boolean | false,
    onClose: () => void
}

const QuestsFilter: React.FC<QuestsFilterProps> = ({ isOpen, onClose }) => {

    const modal = useRef<HTMLIonModalElement>(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <IonModal ref={modal} initialBreakpoint={0.5} breakpoints={[0, 0.5]} isOpen={isOpen} onDidDismiss={() => onClose()}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Фильтры</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => dismiss()}>Закрыть</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src="https://i.pravatar.cc/300?u=b" />
                        </IonAvatar>
                        <IonLabel>
                            <h2>Connor Smith</h2>
                            <p>Sales Rep</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src="https://i.pravatar.cc/300?u=a" />
                        </IonAvatar>
                        <IonLabel>
                            <h2>Daniel Smith</h2>
                            <p>Product Designer</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src="https://i.pravatar.cc/300?u=d" />
                        </IonAvatar>
                        <IonLabel>
                            <h2>Greg Smith</h2>
                            <p>Director of Operations</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src="https://i.pravatar.cc/300?u=e" />
                        </IonAvatar>
                        <IonLabel>
                            <h2>Zoey Smith</h2>
                            <p>CEO</p>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonModal>
    );
}
export default QuestsFilter;
