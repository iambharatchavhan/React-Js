import React from "react";
import "./help.css";
import { useState } from "react";

const Section = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div class="parentDiv">
      <div class="childDiv2">
        <div class="question">
          <div class="drop">
            <h2>{question}</h2>
            {isVisible ? (
              <button onClick={() => setIsVisible(false)} class="btn-up">
                &#8963;
              </button>
            ) : (
              <button onClick={() => setIsVisible(true)} class="btn-down">
                &#86;
              </button>
            )}
          </div>
          {isVisible && <p>{answer}</p>}
        </div>
      </div>
    </div>
  );
};

const Help = () => {
  return (
    <section class="sectionFaq">
      <h1 class="titleHelp">Help & Support</h1>
      <Section
        question={"What is TossTaste Customer Care Number?"}
        answer={
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@TossTaste.in Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A TossTaste representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails."
        }
      />
      <Section
        question={"Can I edit my order? "}
        answer={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
      />
      <Section
        question={"Can I change the address / number? "}
        answer={
          "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team."
        }
      />
      <Section
        question={"Cancellations and Refunds?"}
        answer={
          "As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, TossTaste reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, TossTaste shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)TossTaste reserves the right to charge you cancellation fee for the orders constrained to be cancelled by TossTaste for reasons not attributable to TossTaste, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, TossTaste will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to TossTaste or the restaurant partner or delivery partners, TossTaste shall not charge you any cancellation fee."
        }
      />
    </section>
  );
};

export default Help;
