import type { FC } from 'react';

import { Text } from '@chakra-ui/react';
import db from 'firebase';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

const FirebaseTest: FC = () => {
  const [snapshot, isLoading, error] = useCollection(collection(db, 'test'));

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {isLoading && <span>Collection: Loading...</span>}
      {snapshot && (
        <span>
          Collection:{' '}
          {snapshot.docs.map((doc) => (
            //   <Text key={doc.id}>{JSON.stringify(doc.data())}, </Text>
            <Text as="span" key={doc.id}>
              {doc.data().name}
            </Text>
          ))}
        </span>
      )}
    </div>
  );
};

export default FirebaseTest;
