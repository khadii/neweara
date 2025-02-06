import { useState } from "react";
import axios from "axios";
// import { API_URL } from "../../constants/config";

import { API_URL } from "./genral";
import { useRouter } from "next/navigation";


export const useLogin = () => {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
//   const { showSuccess, showError, showInfo } = useToast();

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        credential: email.toLowerCase(),
        password,
      });
      console.log({ response: response?.data?.data });
      const { data, success } = response?.data?.data;
      await localStorage.setItem("token", data.token);
      await localStorage.setItem(
        "userDetail",
        JSON.stringify(data.userDetails)
      );
      router.replace("/dashboard");
    } catch (err: any) {
      console.log({ err: err.response?.data?.message });
      if (axios.isAxiosError(err)) {
        // showError("Failed to login", err.response?.data?.message);
        setError(err.response?.data?.message || "An error occurred");
      } else {
        // showError("Failed to login", "Network error");
        setError("Network error");
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

// const [email, setEmail] = useState("");
// // const [email, setEmail] = useState("famosipe2010@gmail.com");
// const [password, setPassword] = useState("");
// // const [password, setPassword] = useState("P@ssw0rd");
// const { login, loading, error } = useLogin();

// const handleLogin = async () => {
//   await login(email, password);
// };


// onst [activeTab, setActiveTab] = useState("Order");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Order":
//         return <Order />;
//       case "Subscriptions":
//         return <Subscriptions />;
//       case "Customers":
//         return <DashboardThree />;
//       default:
//         return <Order />;
//     }
//   };

// useEffect(() => {
   
//     try {
//       const auth = localStorage.getItem("stk-apk");
//       if (!auth) {
//         router.replace("/createAccount/Login");
//       }
//     } catch (error) {
//       console.error("Error accessing localStorage:", error);
//     }
//     Kyccheck()
  
// }, []);





// const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().min(6, "Too short").required("Required"),
//   });
  
//   const MyForm = () => {
//     return (
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => console.log(values)}
//       >



// const storedUserDetails = localStorage.getItem('userDetail');
// setUserDetails(JSON.parse(storedUserDetails));