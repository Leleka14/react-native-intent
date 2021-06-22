import {ScaledSheet} from 'react-native-size-matters'

interface IProps {
  top: number
  left: number
  right: number
  bottom: number
}

export default (insets: IProps) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: insets.top,
    },
    search: {
      borderColor: '#DFDFDF',
      borderWidth: '1@s',
      marginHorizontal: '10@s',
      padding: '10@s',
      borderRadius: '10@s',
      fontSize: '15@s',
    },
  })
