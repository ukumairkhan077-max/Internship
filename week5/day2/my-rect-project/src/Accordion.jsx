import { useState } from "react";
import faqs from "./data";
import "./Accordion.css";

function Accordion() {
    const [openId, setOpenId] = useState(null);

    function handleChange(id) {
        if (openId === id) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
    }

    return (
        <div className="accordion-container">
            <h1 className="accordion-title">
                Frequently Asked Questions
            </h1>

            {faqs.map((faq) => (
                <div className="accordion-item" key={faq.id}>
                    <button
                        className="accordion-button"
                        onClick={() => handleChange(faq.id)}
                    >
                        {faq.question}

                        <span className="icon">
                            {openId === faq.id ? "−" : "+"}
                        </span>
                    </button>

                    {openId === faq.id && (
                        <div className="accordion-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;