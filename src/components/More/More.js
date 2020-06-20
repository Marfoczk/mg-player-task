import React from 'react'
import coverUnr from '../../images/unreleased_cover.png'
import { Wrapper, StyledTitle, StyledDot, StyledText } from './More.styles'

export default function More() {
    return (
        <Wrapper>
            <img alt='' src={coverUnr}/>
            <StyledTitle big>Self Conscious</StyledTitle>
            <StyledTitle>Kanye West</StyledTitle>
            <StyledDot>...</StyledDot>
            <StyledText>Add to playlist</StyledText>
            <StyledText>Show album</StyledText>
            <StyledText>Share with friends</StyledText>
        </Wrapper>
    )
}
