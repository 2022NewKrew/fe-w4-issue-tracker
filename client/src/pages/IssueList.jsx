import styled from 'styled-components';
import { Logo, FilterBar, Tabs, Button, IndicatorDropDown } from '@components';
import { useRecoilState } from 'recoil';
import { userInfoSelector } from '../states';

const Wrapper = styled.div`
    padding: 27px 80px;
`;

const NavBar = styled.div`
    margin-top: 60px;
    > * {
        &:nth-child(2) {
            margin-left: 222px;
        }
        &:nth-child(3) {
            margin-left: 16px;
        }
    }
`;

const MenuBar = styled.div`
    margin-top: 24px;
    background-color: #f7f7fc;
    border-radius: 16px 16px 0 0;
    padding: 18px 32px;

    > * {
        &:nth-child(2) {
            margin-left: 32px;
        }

        &:nth-child(3) {
            margin-left: 24px;
        }

        &:nth-child(4) {
            margin-left: 564px;
        }
    }

    button + button {
        margin-left: 32px;
    }
`;

const AllCheckBox = styled.input`
    margin-top: 5px;
`;

export function IssueList() {
    const userInfo = useRecoilState(userInfoSelector);

    return (
        <Wrapper>
            <Logo medium />
            <NavBar>
                <FilterBar />
                <Tabs />
                <Button small_standard>이슈 추가</Button>
            </NavBar>
            <MenuBar>
                <AllCheckBox type="checkbox" />
                <Button medium_text imageURL="/assets/img/alertCircle.png">
                    열린 이슈(2)
                </Button>
                <Button medium_text imageURL="/assets/img/archive.png">
                    닫힌 이슈(2)
                </Button>
                <IndicatorDropDown>담당자</IndicatorDropDown>
                <IndicatorDropDown>레이블</IndicatorDropDown>
                <IndicatorDropDown>마일스톤</IndicatorDropDown>
                <IndicatorDropDown>작성자</IndicatorDropDown>
            </MenuBar>
            <ul></ul>
        </Wrapper>
    );
}
