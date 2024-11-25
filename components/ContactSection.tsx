import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center p-4 py-20"
    >
      <Card className="w-[80%]">
        <CardHeader>
          <CardTitle className="text-xl">문의사항</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-flow-row grid-cols-2 gap-8">
              <Input
                className="border-stroke h-[48px] rounded"
                id="name"
                placeholder="성함"
              />
              <Input
                className="border-stroke h-[48px] rounded"
                id="company"
                placeholder="회사명 (선택사항)"
              />
              <Input
                className="border-stroke h-[48px] rounded"
                id="email"
                placeholder="이메일"
              />
              <Input
                className="border-stroke h-[48px] rounded"
                id="phone"
                placeholder="전화번호"
              />
            </div>
            <Textarea
              name="message"
              id="message"
              rows={6}
              className="border-stroke text-body mt-8 w-full resize-none rounded border bg-white py-4 text-base"
              placeholder="내용을 입력해주세요."
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="rounded-xl p-6 font-bold text-white">
            문의하기
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ContactSection;
