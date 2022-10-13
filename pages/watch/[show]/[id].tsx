import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function Watch() {
  const router = useRouter();
  const { id } = router.query;

  const [show, setShow] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/shows/${id}`)
        .then((res) => res.json())
        .then((data) => setShow(data));
    }
  }, [id]);

  return (
    <div>
      <h1>Watch</h1>
      {show && <div>{JSON.stringify(show)}</div>}
    </div>
  );
}
