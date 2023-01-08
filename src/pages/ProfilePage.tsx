import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import {YMaps, Map, Placemark, GeolocationControl} from '@pbe/react-yandex-maps';

const ProfilePage: React.FC = () => {
    const defaultState = {
        center: [59.938955, 30.315644],
        zoom: 13,
        controls: []
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <YMaps>
                    <Map defaultState={defaultState} width="100vw" height="100vh">
                        <Placemark geometry={[55.684758, 37.738521]} />
                        <GeolocationControl options={{ float: "left", position: { bottom: 70, right: 20 } }} />
                    </Map>
                </YMaps>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
