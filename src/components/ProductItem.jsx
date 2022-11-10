import React from "react";

const productitem = () => {
  const [items, setitem] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setitem(res));
  }, []);

  return (
    <div>
      <h1>users listing page</h1>
      {items?.map((user) => (
        <p key={user.id}>{user.id}</p>
      ))}
    </div>
  );
};

export default productitem;
