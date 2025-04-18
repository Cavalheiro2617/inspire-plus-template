import React, { useState } from "react";
export function Tabs({ defaultValue, children, className }) {
  const [value, setValue] = useState(defaultValue);
  return <div className={className}>{React.Children.map(children, child => React.cloneElement(child, { value, setValue }))}</div>;
}
export function TabsList({ children, className }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}
export function TabsTrigger({ value: tab, children, value, setValue }) {
  return <button onClick={() => setValue(tab)} className={`px-3 py-1 rounded ${value === tab ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>{children}</button>;
}
export function TabsContent({ value: tab, children, value }) {
  return value === tab ? <div>{children}</div> : null;
}
