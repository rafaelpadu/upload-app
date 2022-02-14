import React from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/layout/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormDataContext = React.createContext({
  formData: {},
  setFormData: () => {},
});
function App() {
  const [formData, setFormData] = React.useState(new FormData());
  const value = React.useMemo(() => ({ formData, setFormData }), [formData]);
  return (
    <div className="App">
      <BrowserRouter>
        <FormDataContext.Provider value={value}>
          <Body />
        </FormDataContext.Provider>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        theme="light"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
    </div>
  );
}

export default App;
