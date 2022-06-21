import { FunctionComponent } from 'react';
import { Menubar } from 'primereact/menubar';

const Navigation: FunctionComponent = () => {
  const navList = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        window.location.href = '/';
      }
    },
    {
      label: 'Location',
      icon: 'pi pi-fw pi-globe',
      command: () => {
        window.location.href = '/location';
      }
    },
    {
      label: 'Weather',
      icon: 'pi pi-fw pi-cloud',
      command: () => {
        window.location.href = '/results';
      }
    }
  ];

  return (
    <div style={{ margin: '20px' }}>
      <header>
        <nav>
          <ul style={{ paddingLeft: '0px' }}>
            <Menubar style={{ backgroundColor: '#ceebf3' }} model={navList} />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
