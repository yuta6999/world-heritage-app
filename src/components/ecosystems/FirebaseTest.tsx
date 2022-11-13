/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FC, useState } from 'react';
import { Text, Heading } from '@chakra-ui/react';
import db from 'firebase';
import { doc, getDoc } from 'firebase/firestore';

const FirebaseTest: FC<{ worldHeritageID: string }> = ({
  worldHeritageID = '',
}) => {
  const docRef = doc(db, 'worldHeritages', worldHeritageID);
  const [name, setName] = useState('Now loading...');
  const [detail, setDetail] = useState('Now loading...');
  getDoc(docRef).then((documentSnapshot) => {
    if (documentSnapshot.exists()) {
      setName(documentSnapshot.data().name);
      setDetail(documentSnapshot.data().detail);
    } else {
      setName('nothing...');
    }
  });

  return (
    <div>
      <Heading>{name}</Heading>
      <Text>{detail}</Text>
    </div>
  );
};

export default FirebaseTest;
