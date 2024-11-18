import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Certificates.scss";
import { urlFor, client } from "../../client";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text text_color">
        My Certificates & <span>Awards</span>
      </h2>

      <div className="app__profiles">
        {certificates.map((certificate, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={certificates.title + index}
          >
            <img src={urlFor(certificate.imgUrl)} alt={certificate.title}/>
            <h2 className="bold-text text_color" style={{ marginTop: 20 }}>
              {certificate.title}
            </h2>
            <p className="p-text text_color_gray" style={{ marginTop: 10 }} >
              {certificate.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__certificates"),
  "certificates",
  "app__whitebg"
);
