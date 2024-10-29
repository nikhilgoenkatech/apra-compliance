import React from "react";

import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { Flex } from "@dynatrace/strato-components/layouts";
import {
  Heading,
  Paragraph,
  Strong,
} from "@dynatrace/strato-components/typography";
import { Card } from "../components/Card";

export const Home = () => {
  const theme = useCurrentTheme();
  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>

      <Heading>APRA CPS 230 Compliance & Reporting</Heading>

      <Flex gap={48} paddingTop={64} flexFlow="wrap">
        <Card
          href="https://guu84124.live.dynatrace.com/#dashboard;id=4302a03c-6c8c-4961-87b3-bb68c99922cf;applyDashboardDefaults=true"
          imgSrc={
            theme === "light" ? "./assets/monitor.png" : "./assets/monitor_dark.png"
          }
          name="Monitor Platform"
        />
        <Card
          href="https://guu84124.apps.dynatrace.com/ui/document/v0/#share=8d45f603-932a-4587-9532-93667882fe57"
          imgSrc={
            theme === "light"
              ? "./assets/analyse_n_evaluate.png"
              : "./assets/analyse_n_evaluate_dark.png"
          }
          name="Analyse & Evaluate"
        />
        <Card
          href="https://guu84124.live.dynatrace.com/#dashboard;id=60827a8a-ab6c-4ed6-93bd-a687d370b13b;gtf=-2h;gf=all"
          imgSrc={
            theme === "light"
              ? "./assets/treat.png"
              : "./assets/treat_dark.png"
          }
          name="Treat"
        />
        <Card
          href="https://guu84124.apps.dynatrace.com/ui/document/v0/#share=f8f6716c-4aea-440e-ba17-7110414eaa46"
          imgSrc={
            theme === "light"
              ? "./assets/record.png"
              : "./assets/record_dark.png"
          }
          name="Record"
        />
      </Flex>
    </Flex>
  );
};
