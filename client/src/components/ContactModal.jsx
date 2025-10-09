"use client";

import { useState } from "react";
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
import { useToast } from "@/hooks/UseToast";  // Changed to lowercase 'u'

export const ContactModal = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();  // Changed to lowercase 'u'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact form submitted:", data);

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    onOpenChange(false);
    e.target.reset();
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
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

