import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const AccordionOne = ({ customStyle }) => {
  return (
    <Accordion
      className={`rn-accordion-style ${customStyle}`}
      defaultActiveKey="0"
    >
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            `What is your experience?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            We have more than 4 years of business experience. We've worked with
            and completed projects for leading retailers, international food and
            drink companies, start-ups, real estate, telecommunications, fashion
            companies, and many, many more.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            What technology do you use?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            For back-end we use Python, Django and Node.js. For front-end we use
            Angular.js, and React.js.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            What are the benefits of Managed Services?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            One of the biggest benefits of managed IT services is the cost
            savings that businesses experience by making business IT support
            costs more predictable and manageable. A managed service approach
            will also provide businesses with comprehensive security, customized
            backup and recovery solutions, and state-of-the-art cloud storage
            and hosting.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Does The Zai Systems provide afterhours emergency support?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Yes, The Zai Systems provides 7x24x 365 support.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            What differentiates The Zai Systems? Why Should I Choose You?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            The Zai Systems is a committed partner with a strong focus on
            service. We pride ourselves on our ability to understand your
            business and your customers so that we can customize our service to
            you and ensure that you are able to provide that same commitment to
            your customers. We are dedicated to providingpredictability of
            service, cost certainty, and responsiveness. Our organizational
            maturity, extensive senior talent, expertise, and effective
            systemswill help you achieve your business goals.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            Which parts do you most commonly machine for the automotive
            industry?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            Removing welcomed civility or hastened is. Justice elderly but
            perhaps expense six her are another passage. Full her ten open fond
            walk not down.For request general express unknown. He in just mr
            door body held john down he. So journey greatly or garrets. Draw
            door kept do so come on open mean.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;
