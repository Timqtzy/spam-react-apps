import { Accordion } from "flowbite-react";

export default function AccordionComponent() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>What is SPAM?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
            SPAM, or School Press Advisers Movement, is dedicated to supporting
            and developing school paper advisers, student journalists, and
            school publications across the Philippines. Our mission is to
            empower the next generation of journalists by providing resources,
            training, and a network of support.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Why Choose Us?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
            At SPAM, we bring over a decade of experience in campus journalism,
            offering comprehensive training programs and a nationwide network of
            journalism educators and professionals. Our expertise and extensive
            network ensure that you have the support you need to excel in your
            journalism journey.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How to Get Started?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
            Getting started with SPAM is easy. Visit our website to learn more
            about our programs and how you can join our community. Connect with
            us today and start your journey towards becoming a skilled and
            knowledgeable journalist.
            <span className="text-cyan-600 hover:underline dark:text-cyan-500">
              <a href="https://www.facebook.com/SchoolPressAdvisersMovementInc">
                {" "}
                Join SPAM
              </a>
            </span>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
