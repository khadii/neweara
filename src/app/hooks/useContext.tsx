// const { notificationCount, setNotificationCount } = useAdminContext();
import React, { createContext, useContext, useState, ReactNode } from 'react';

{/* <AdminProvider>
<YourComponent />
</AdminProvider> */}

// Create the context
const AdminContext = createContext<any>(null);

// Context Provider component
export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [notificationCount, setNotificationCount] = useState<number>(0);

  return (
    <AdminContext.Provider value={{ notificationCount, setNotificationCount }}>
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook to use the context
export const useAdminContext = () => {
  return useContext(AdminContext);
};
