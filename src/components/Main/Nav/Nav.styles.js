import styled from 'styled-components'
import {ReactComponent as BackIco} from '../../../images/back_ico.svg'
import {ReactComponent as MoreIco} from '../../../images/more_ico.svg'

export const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
`;
export const BackIcon = styled(BackIco)`
    cursor: pointer;
    z-index: 5;
    width: 3rem;
    height: 3rem;
    path{
    fill: #755DD5;
    }
`;
export const MoreIcon = styled(MoreIco)`
    z-index: 5;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`;
export const StyledDiv = styled.div`
    line-height: initial;
    p{
        &:first-child{
            font-size: 1.8rem;
            color: #6F729C;
        }
        &:last-child{
            font-size: 2.4rem;
            color: white;
        }
    }
`;
