import * as ExampleActions from './modules/example/actions';
import React from 'react';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './types';
import { useAction, scale } from './utils';
import { Text , SafeAreaView } from 'react-native';


// import { Box, Text, Input } from './views/components/basic';

import { Navigation } from './navigation';

export const AppContainer: React.FC = () => {
  const { lastName, firstName } = useSelector((state: RootState) => state.example);

  const changeFirstNameAction = useAction(ExampleActions.changeFirstName);
  const changeLastNameAction = useAction(ExampleActions.changeLastName.request);

  return (
    // <Box mt={scale(100)}>
    //   <Text>Hello Welcome Appello RN Template</Text>

    //   <Box mt={scale(50)}>
    //     <Text fontSize={scale(20)} textAlign="center">Direct change State</Text>
    //     {/* <InputBox>
    //       <Input value={firstName} onChangeText={value => changeFirstNameAction(value)} />
    //     </InputBox> */}
    //   </Box>
    //   <Box mt={scale(50)}>
    //     <Text fontSize={scale(20)} textAlign="center">Change State through Redux-Saga generator</Text>
    //     {/* <InputBox>
    //       <Input value={lastName} onChangeText={value => changeLastNameAction(value)} />
    //     </InputBox> */}
    //   </Box>
    // </Box>
    // <Text>Hello world</Text>
      <>
        <SafeAreaView />
        <Navigation />
      </>
  );
};

// const InputBox = styled(Box).attrs(({ theme }) => ({
//   border: scale(1),
//   borderColor: theme.colors.black,
// }))``;

