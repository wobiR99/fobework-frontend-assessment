import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SignIn = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsLoggedIn(true);
  }
  return (
    <main className="h-screen w-screen flex flex-col gap-6 justify-center items-center">
      <Mail color="#fff" size={64} />
      <p className="text-3xl text-white font-semibold">Login To Your Account</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col justify-start gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col  w-full gap-3">
                <FormLabel className="text-base font-semibold text-white">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="bg-transparent border-gray-300 placeholder:text-gray-500 min-w-[350px] text-white"
                    placeholder="Enter Email Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col  w-full gap-3">
                <FormLabel className="text-base font-semibold text-white">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="bg-transparent border-gray-300 placeholder:text-gray-500 min-w-[350px] text-white"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-white text-black mt-10 font-semibold text-base"
          >
            Login To Your Account
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default SignIn;
