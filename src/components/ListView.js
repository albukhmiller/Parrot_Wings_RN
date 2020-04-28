import React, { Component } from 'react';
import { View } from 'react-native'

import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class ListView extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Left>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ alignSelf: 'flex-start' }}>Dejan Lovren</Text>
                                    <Text style={{ alignSelf: 'flex-start' }}>20.12.2000</Text>
                                </View>
                            </Left>
                            <Right>
                                <Text note>3:43 pm</Text>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}