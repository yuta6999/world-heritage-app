/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import db from 'firebase';
import { doc, getDoc } from 'firebase/firestore';

const FirebaseTest: FC = () => {
  const worldHeritageID: string = useParams().id as string;
  const docRef = doc(db, 'worldHeritages', worldHeritageID);
  const [name, setName] = useState('Now loading...');
  getDoc(docRef).then((documentSnapshot) => {
    if (documentSnapshot.exists()) {
      setName(documentSnapshot.data().name);
    } else {
      setName('nothing...');
    }
  });

  return <Text>{name}</Text>;
};

export default FirebaseTest;
