import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './QuestsList.css';

const QuestsList: React.FC = () => {

    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {arr.map((item: number, i: number) => (
                <IonCard key={i} routerLink="/quest-card">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
            ))}
        </>
    );
}
export default QuestsList;
