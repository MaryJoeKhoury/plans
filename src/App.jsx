import { useState } from "react";
import "./App.css";
import Plan from "./components/Plan";
import Detail from "./components/Detail";
import SectionTitle from "./components/SectionTitle";
import SectionSubTitle from "./components/SectionSubTitle";
import BackButton from "./components/BackButton";
import Button from "./components/Button";

const plansData = [
  {
    id: 1,
    type: "base",
    title: "Base Plan",
    price: 12,
    discount: 10,
    details: [
      { id: 1, title: "All Limited Links", active: true },
      { id: 2, title: "Own Analytic Platform", active: true },
      { id: 3, title: "Chat Support", active: false },
      { id: 4, title: "Optimize Hashtag", active: false },
      { id: 5, title: "Unlimited User", active: false },
    ],
  },
  {
    id: 2,
    type: "fuse",
    title: "Fuse Plan",
    price: 28,
    discount: 20,
    details: [
      { id: 1, title: "All Limited Links", active: true },
      { id: 2, title: "Own Analytic Platform", active: true },
      { id: 3, title: "Chat Support", active: true },
      { id: 4, title: "Optimize Hashtag", active: false },
      { id: 5, title: "Unlimited User", active: false },
    ],
  },
  {
    id: 3,
    type: "extro",
    title: "Extro Plan",
    price: 48,
    discount: 30,
    details: [
      { id: 1, title: "All Limited Links", active: true },
      { id: 2, title: "Own Analytic Platform", active: true },
      { id: 3, title: "Chat Support", active: true },
      { id: 4, title: "Optimize Hashtag", active: true },
      { id: 5, title: "Unlimited User", active: false },
    ],
  },
  {
    id: 4,
    type: "universe",
    title: "Universe Plan",
    price: 96,
    discount: 40,
    details: [
      { id: 1, title: "All Limited Links", active: true },
      { id: 2, title: "Own Analytic Platform", active: true },
      { id: 3, title: "Chat Support", active: true },
      { id: 4, title: "Optimize Hashtag", active: true },
      { id: 5, title: "Unlimited User", active: true },
    ],
  },
];

function App() {
  const [isDisabled, setIsDisabled] = useState(true);

  const [currentPlan, setCurrentPlan] = useState();

  const [details, setDetails] = useState([
    { id: 1, title: "All Limited Links", active: false },
    { id: 2, title: "Own Analytic Platform", active: false },
    { id: 3, title: "Chat Support", active: false },
    { id: 4, title: "Optimize Hashtag", active: false },
    { id: 5, title: "Unlimited User", active: false },
  ]);

  const onPlanActivate = (e) => {
    const value = e.target.checked;
    setIsDisabled(!value);
    if (!value) setCurrentPlan();
  };

  const onPlanSelect = (e) => {
    const value = e.target.value;
    setCurrentPlan(value);
    const currentDetails = plansData.find((plan) => plan.type === value);
    setDetails(currentDetails.details);
  };

  return (
    <div>
      <div className="main-container">
        <SectionTitle title="Choose Your Plan" />
        <SectionSubTitle subtitle="No Contract and No Surprise Fees" />
        <div className="innerContainer">
          <div className="leftContainer">
            <label className="plan-activation">
              <input type="checkbox" onChange={onPlanActivate} />
              <div className="plan-activation__switch" />
              <div>
                <span className="plan-activation__title">Monthly Plan</span>
              </div>
            </label>
            {plansData.map((plan) => (
              <Plan
                key={plan.id}
                type={plan.type}
                id={plan.id}
                title={plan.title}
                discount={plan.discount}
                price={plan.price}
                disabled={isDisabled}
                isChecked={currentPlan === plan.type}
                onSelect={onPlanSelect}
              />
            ))}

            <BackButton />
          </div>

          <div
            className="rightcontainer"
            style={{
              visibility: !isDisabled ? "visible" : "hidden",
            }}
          >
            <div className="active-plan">
              <div className="plan-activated__header">
                <div>
                  <p>Details</p>
                </div>
                <div className="selected-plan">
                  {currentPlan
                    ? `${currentPlan?.toUpperCase()} PLAN
                  `
                    : ""}
                </div>
              </div>
              <div className="plan-selections">
                <ul className="plan-activated__features">
                  {details?.map((detail) => (
                    <Detail
                      key={detail.id}
                      active={detail.active}
                      title={detail.title}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <Button text="Choose Plan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
