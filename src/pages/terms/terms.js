import React from "react";
import Container from "../../components/Container";
import useBodyClass from "../../hooks/useBodyClass";

const Terms = () => {
  useBodyClass("p-article");

  return (
    <article className="p-article-box">
      <Container article>
        <h1>Terms of Use</h1>
        <span className="el-h8-medium">This AGREEMENT was last UPDATED on October 30th, 2021</span>

        <span className="el-title-h4 semi">
          Please scroll down and read this agreement in its entirety before you use any of our products or services or become a member of
          utafiti.
        </span>
        <p>
          This Terms of Use Agreement (the 'Agreement') and our Privacy Policy, which is hereby incorporated by reference, governs your use
          of UTAFITI and www.bigleaguefinance.com site, products and services ('UTAFITI” or the 'Service'); UTAFITI provides financial
          infotainment and education from UTAFITI ('we' or 'us'). By accessing or using the products, services, website and software provide
          d through or in connection with UTAFITI, you signify that you have read, understood, and agree to be bound by this Agreement and
          our current Privacy Policy, whether or not you are a registered member. If you do not agree to any of these terms or any future
          Terms of Use, you may not use or access (or continue to access) the Service.
        </p>

        <h5>1. Changes to the Agreement</h5>

        <p>
          We may change the terms of this Agreement at any time and without prior notice. If we do this, we will post the changes to this
          page and indicate at the top of the page the date the Agreement was last revised. You can access this document at any time by
          selecting the Terms of Use link located at the bottom of every page on the UTAFITI web site. Your use of UTAFITI after changes are
          made to this Agreement means that you agree to be bound by such changes. As our business changes constantly, this Agreement, our
          Privacy Policy, and other pertinent company policies may change also. You should check our web site frequently to see recent
          changes.
        </p>

        <h5>2. Legal Disclaimer</h5>

        <p>
          UTAFITI is a content provider and publisher and is not a registered broker-dealer or investment advisor. By accessing UTAFITI
          websites and/or using UTAFITI products and services, including without limitation any and all content available on or through the
          Service, you understand and agree that the material provided in UTAFITI products and services is for informational and educational
          purposes only, and that no mention of a particular security in any UTAFITI product or service constitutes a recommendation to buy,
          sell, or hold that or any other security, or that any particular security, portfolio of securities, transaction or investment
          strategy is suitable for any specific person. You further understand and agree that none of the information providers or their
          affiliates will advise you personally concerning the nature, potential, value or suitability of any particular security, portfolio
          of securities, transaction, investment strategy or other matter. To the extent any of the information contained in any UTAFITI
          product or service may be deemed to be investment advice, such information is impersonal and not tailored to the investment needs
          of any specific person.
        </p>

        <p>
          You understand and agree that any UTAFITI product or service may contain opinions from time to time with regard to any securities
          mentioned in other UTAFITI products or services, and that those opinions may be different from those contained in another UTAFITI
          product or service. You understand and agree that, from time to time, any or all of the information providers or their affiliates
          may hold positions in securities mentioned and that they may trade for their own account. In cases where the position is held at
          the time of publication, appropriate disclosure is made as of the time of publication. You understand and agree that performance
          data is supplied by sources believed to be reliable, that the calculations in any UTAFITI publication or service are made using
          such data, and that such data is not guaranteed by these sources, the information providers, or any other person or entity, and
          may not be accurate or complete.
        </p>

        <p>
          You understand that all Analysts operating on UTAFITI are independent consultants and are not employeed or represent UTAFITI in
          any manner. All Analysts content on the UTAFITI site is their own work and does not represent the opinion of UTAFITI or any of the
          other Analysts on the UTAFITI platform.
        </p>
        <p>
          BEFORE SELLING OR BUYING ANY CRYPTOCURRENCY OR OTHER INVESTMENT YOU SHOULD CONSULT WITH A QUALIFIED BROKER OR OTHER FINANCIAL
          PROFESSIONAL TO VERIFY PRICING INFORMATION AND TO SOLICIT ADVICE AS TO THE APPROPRIATENESS OF A GIVEN TRANSACTION OR INVESTMENT.
        </p>
        <h5>3. Registration</h5>
        <p>
          In order to access certain features of the Service, you will have to become a member of UTAFITI by subscribing and creating a
          UTAFITI account. When you create your account, you must provide accurate and complete information, and keep that information up to
          date. You are solely responsible for maintaining the confidentiality of your user name and password and for any and all activities
          (including purchases) that are conducted through your account. You may never use another user's account without permission.
        </p>
        <p>
          By providing UTAFITI your email address you consent to our using the email address to send you Service-related notices, including
          any notice required by law, in lieu of written communication by postal mail. You may unsubscribe to certain email communications
          at any time though the 'Manage Account' link at the top of every UTAFITI page when you are logged in. We may also use your email
          address to send you other messages, including changes to UTAFITI features and special offers. If you do not want to receive such
          email messages, you may opt out by sending an email message to admin@UTAFITI with the word 'UNSUBSCRIBE' in the subject field.
        </p>
      </Container>
    </article>
  );
};

export default Terms;
