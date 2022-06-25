import React from 'react';
import * as S from './styled';

const Repositories = () => {
    return (
        <WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected" >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
        </WrapperTabs>
    );
}

export default Repositories;