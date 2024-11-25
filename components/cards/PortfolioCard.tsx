import React from "react";
import { Portfolio } from "@/config/portfolios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <Card className="grid justify-center rounded-xl p-0">
      <CardHeader className="">
        <CardTitle className="text-xl font-bold">{portfolio.title}</CardTitle>
        <div className="flex flex-wrap items-start justify-start gap-2">
          {portfolio.skills.map((skill) => (
            <Badge className="rounded-full text-white" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div>
          {portfolio.descriptions.map((description) => (
            <p key={description}>
              {"•"} {description}
            </p>
          ))}
        </div>
      </CardContent>

      {portfolio.url ? (
        <CardFooter className="flex justify-center">
          <Link href={portfolio.url}>
            <Button
              className="w-fit items-center justify-center rounded-full"
              variant="outline"
            >
              자세히
            </Button>
          </Link>
        </CardFooter>
      ) : undefined}
    </Card>
  );
};

export default PortfolioCard;
