import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
} from "@mantine/core";
import {
  CreditCardIcon,
  BuildingIcon,
  RepeatIcon,
  RecycleIcon,
  ReceiptIcon,
  RadioReceiverIcon,
  ReplyIcon,
  CircleSlash2,
  CoinsIcon,
} from "lucide-react";
import classes from "./../styles/elementsOfContacts.module.css";

const mockdata = [
  { title: "Credit cards", icon: CreditCardIcon, color: "violet" },
  { title: "Banks nearby", icon: BuildingIcon, color: "indigo" },
  { title: "Transfers", icon: ReplyIcon, color: "blue" },
  { title: "Refunds", icon: RadioReceiverIcon, color: "green" },
  { title: "Receipts", icon: RecycleIcon, color: "teal" },
  { title: "Taxes", icon: ReceiptIcon, color: "cyan" },
  { title: "Reports", icon: RepeatIcon, color: "pink" },
  { title: "Payments", icon: CoinsIcon, color: "red" },
  { title: "Cashback", icon: CircleSlash2, color: "orange" },
];

export default function ElementsOfContacts() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
