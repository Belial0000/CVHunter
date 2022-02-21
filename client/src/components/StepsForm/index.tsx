import { Steps } from 'antd';
import React, { useState } from 'react';
import './index.css';
import PersonalForm from '../PersonalForm'

import AllForm from '../AllForm';
import GenerateHTMLTemplates from "../GenerateHTMLTemplates";

const { Step } = Steps;

const StepsForm = () => {

  const [current, setCurrent] = React.useState(0);
  const [page, setPage] = useState({});

  const next = (values: any) => {
    setCurrent(current + 1);
    setPage(values)
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Личное',
      content: <PersonalForm next={next} />,
    },
    {
      title: 'Опыт',
      content: <AllForm next={next} prev={prev} />,
    },
    {
      title: 'Шаблон',
      content: <GenerateHTMLTemplates prev={prev} />,
    },
  ];

  return (
    <>
      <Steps current={current} style={{ width: '50%' }}>
        {steps.map(item => (
          <Step className="ZZZZZ" key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content FFFFFFFFFF">{steps[current].content}</div>
      <div className="steps-action">
        {/* {current === 1 && current < steps.length - 1 && (
          <Button type="primary" onClick={() => next(page)}>
            Следующий шаг
          </Button>
        )} */}
        {/*{current === steps.length - 1 && (*/}
        {/*  <Button type="primary" onClick={() => message.success('Processing complete!')}>*/}
        {/*    Сохранить*/}
        {/*  </Button>*/}
        {/*)}*/}
        {/* {current === 2 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Назад
          </Button>
        )} */}
      </div>
    </>
  );
};

export default StepsForm
