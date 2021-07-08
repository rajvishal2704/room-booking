import React, {useReducer} from 'react'
import styled from 'styled-components'

const initialState = {
    roomCounter: 1,
    adultCounter: 1,
    childCounter: 0,
}
const reducer = (state, action) => {
    // if(state.roomCounter >= 1 && state.roomCounter <= 5) {
    //     switch(action) {
    //         case 'decrementRoom':
    //             let peopleCounter = state.adultCounter + state.childCounter
    //             if(state.roomCounter * 4 < peopleCounter) {
    //                 var roomCounter = state.roomCounter * 4
    //                 return {...state, roomCounter: state.roomCounter - 1, roomCounter: roomCounter}
    //             }
    //             // return {...state, roomCounter: state.roomCounter - 1, roomCounter: peopleCounter - 1}
    //         case 'incrementRoom':
    //             return {...state, roomCounter: state.roomCounter + 1, adultCounter: state.adultCounter + 1}  
    //     }    
    // }
    let peopleCounterDec = state.adultCounter + state.childCounter
    let peopleInRoom = state.roomCounter * 4
    switch(action) {
        case 'decrementRoom':
           
            if(peopleCounterDec >= peopleInRoom) {
                alert(peopleInRoom + ' ' + peopleCounterDec)
                return {...state, roomCounter: state.roomCounter - 1, adultCounter: peopleInRoom - 4}
            } else {
                return {...state, roomCounter: state.roomCounter - 1}
            }
                
        case 'incrementRoom':
            let peopleCounterInc = state.adultCounter + state.childCounter
            if(peopleCounterInc >= 20) {
                return {...state, roomCounter: state.roomCounter + 1}  
            } else {
                return {...state, roomCounter: state.roomCounter + 1, adultCounter: state.adultCounter + 1}  
            }
        // case 'decrementRoom':
        //     return {...state, roomCounter: state.roomCounter - 1, adultCounter: state.adultCounter - 1}
        // case 'incrementRoom':
        //     return {...state, roomCounter: state.roomCounter + 1, adultCounter: state.adultCounter + 1}  
        case 'decrementAdult':
            // let decAdult = state.adultCounter - 1;
            // if(decAdult % 4 == 0) {
            //     return {...state, adultCounter: state.adultCounter - 1, roomCounter: state.roomCounter - 1}
            // } else {
                return {...state, adultCounter: state.adultCounter - 1}
            // }
        case 'incrementAdult':
            // let incAdult = state.adultCounter;
            // let room = state.roomCounter;
            // alert(room)
            // if(incAdult % 4 == 0 && room <= 5) {
            //     return {...state, adultCounter: state.adultCounter + 1, roomCounter: state.roomCounter + 1}
            // } else {
                return {...state, adultCounter: state.adultCounter + 1}
            // }
        case 'decrementChild':
            return {...state, childCounter: state.childCounter - 1}
        case 'incrementChild':
            return {...state, childCounter: state.childCounter + 1}
        default: 
            return state               
    }
}
        
const RoomBooking = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <Container>
            Choose number of <span>people</span>
            <Card>
                <Content>
                    <p>ROOMS</p>
                    <a>
                        <Decrement disabled={count.roomCounter == 1 ? true : false} onClick={() => dispatch('decrementRoom')}><img src="/images/negative.png" /></Decrement>
                        <span>{count.roomCounter}</span>
                        <Increment disabled={count.roomCounter == 5 ? true : false} onClick={() => dispatch('incrementRoom')}><img src="/images/plus.png" /></Increment>
                    </a>
                </Content>
                <Content>
                    <p>ADULT</p>
                    <a>
                        <Decrement disabled={count.adultCounter == 1 ? true : false} onClick={() => dispatch('decrementAdult')}><img src="/images/negative.png" /></Decrement>
                        <span>{count.adultCounter}</span>
                        <Increment disabled={count.adultCounter >= 20 ? true : false} onClick={() => dispatch('incrementAdult')}><img src="/images/plus.png" /></Increment>
                    </a>
                </Content>
                <Content>
                    <p>CHILDREN</p>
                    <a>
                        <Decrement disabled={count.childCounter == 0 ? true : false} onClick={() => dispatch('decrementChild')}><img src="/images/negative.png" /></Decrement>
                        <span>{count.childCounter}</span>
                        <Increment onClick={() => dispatch('incrementChild')}><img src="/images/plus.png" /></Increment>
                    </a>
                </Content>
            </Card>
        </Container>
    )
}

const Container = styled.div `
    margin: 5px 400px;
    text-align: left;
    color: #2A3392;
    span {
        font-weight: 700;
    }
`
const Card = styled.div `
    border: 2px solid black;
`
const Content = styled.div `
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    margin: 0 10px 15px;
    p {
        color: #2A3392;
        font-weight: 600;
    }
    a {
        display: flex;
        align-items: center;
    }
    &:last-child {
        border: none;
        margin-bottom: 2px;
    }
`
const Decrement = styled.button `
    height: 30px;
    width: 40px;
    background: none;
    border: none;
    img {
        height: 100%;
        width: 100%;
    }
    &:first-child {

    }
`
const Increment = styled(Decrement) ``

export default RoomBooking
