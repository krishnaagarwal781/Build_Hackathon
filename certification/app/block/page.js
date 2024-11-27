import React from "react";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar2";

function GetStarted() {
  const verifyOptions = [
    "Verify the certificate authenticity",
    "Look up the certificate details",
  ];
  const certifyOptions = [
    "Issue a Certificate",
    "Preview the certificate",
  ];
  const navHidden = true;
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
        <Container
          title={"Verify Certificate"}
          description={
            "Enter to verify the authenticity and validity of the certificate"
          }
          svgr="/CertificateLogo.svg"
          content={verifyOptions}
          path="/verifyCertificate"
        />
        <Container
          title={"Issue Certificate"}
          description={"Enter to issue a cetificate to a candidate"}
          svgr="/GraduateCap.svg"
          content={certifyOptions}
          path="/mint-sbt"
        />
      </div>
    </>
  );
}

export default GetStarted;
