import './App.css';
import ScrollTop from './@basic/components/utils/ScrollTop';
import Routes from './routes';
import ThemeCustomization from './@basic/themes';


function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>

  );
}

export default App;
