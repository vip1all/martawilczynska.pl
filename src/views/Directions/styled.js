import styled from 'styled-components';
import { query } from '../../util/styles';

export const DirectionsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  padding: 11.5rem 1.5rem 1.5rem;

  ${query.sm`
    padding: 13rem 3rem 3rem;
  `}

  ${query.md`
    flex-flow: row nowrap;
    height: 100vh;
  `};
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 3rem;
  ${query.md`
    margin-top: 0;
    height: auto;
  `}
`;

export const LeftWrapper = styled.div`
  flex: 0 0 430px;

  ${query.md`
    width: 430px;
    height: 100%;
    padding-right: 2rem;
    margin-right: 1rem;
    overflow-y: auto;
  `}
`;
