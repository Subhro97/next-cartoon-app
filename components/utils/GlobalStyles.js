import globalStyles from '../../styles/global.scss?type=global';

const GlobalStyles = ({ children }) => {
  return (
    <>
      {children}
      <style jsx>{globalStyles}</style>
    </>
  );
};

export default GlobalStyles;
