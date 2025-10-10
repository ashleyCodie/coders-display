"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { useToast } from "@/hooks/UseToast";

export const ContactModal = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  console.log("isSubmitting:", isSubmitting); // Debug log

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted, setting isSubmitting to true");
    setIsSubmitting(true);

    try {
      console.log("Sending email...");
      await emailjs.sendForm(
        "service_a688axl",
        "template_zouuk1b",
        e.target,
        "M2msgr1ykfUWofbhq"
      );

      console.log("Email sent successfully");
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      e.target.reset();
      setIsSubmitting(false);
      console.log("Reset isSubmitting to false");
      onOpenChange(false);
    } catch (error) {
      console.error("Email error:", error);

      toast({
        title: "Error sending message",
        description:
          "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
      
      setIsSubmitting(false);
      console.log("Error occurred, reset isSubmitting to false");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle>Send me a message</DialogTitle>
          <DialogDescription>
            Fill out the form below and I'll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2 pb-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or job opportunity..."
              rows={5}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
