import Avatar from '../../components/Profile';
import Description from '../../components/Description';
import Title from '../../components/Title';

import { ThemeButton, Job, SidebarContainer } from './styles';

type Props = {
  handleChangeTheme: () => void;
};

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Jose Lima</Title>
      <Description type="light" fontSize={16}>
        devjoselima
      </Description>
      <Job type="dark" fontSize={12}>
        Dev Full-Stack
      </Job>
      <ThemeButton onClick={props.handleChangeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
