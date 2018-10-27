import React from 'react'
import { Image, List } from 'semantic-ui-react'

class ListExampleCelled extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCheck(e) {
        alert(e.target);
    }

    render() {
        return (
        <List celled>
            <List.Item onClick={this.handleCheck}>
                <Image avatar src={require('../assets/icons/dollarIconDark.png')} />
                <List.Content>
                    <List.Header>Karlik Reymonta 17</List.Header>
                    9.00zł
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src={require('../assets/icons/dollarIconDark.png')} />
                <List.Content>
                    <List.Header>KFC Basztowa 8</List.Header>
                    8zł
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src={require('../assets/icons/dollarIconDark.png')} />
                <List.Content>
                    <List.Header>Cafe św Tomasza 17</List.Header>
                    12zł
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src={require('../assets/icons/dollarIconDark.png')} />
                <List.Content>
                    <List.Header>Craftownia św Warzyńca 22</List.Header>
                    49zł
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src={require('../assets/icons/dollarIconDark.png')} />
                <List.Content>
                    <List.Header>McDonald's Szewska 8</List.Header>
                    12zł
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src={require('../assets/icons/dollarIconDark.png')} />
                <List.Content>
                    <List.Header>Pull & Bear Pawia 5</List.Header>
                    99zł
                </List.Content>
            </List.Item>
        </List>
        )
    }
}


export default ListExampleCelled