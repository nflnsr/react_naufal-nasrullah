import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Main } from "@/components/main";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, formSchema } from "@/validators/auth";
import { auth } from "@/utils/auth";
import { useDispatch } from "react-redux";
import { login } from "@/stores/auth";
import { useToast } from "@/components/ui/use-toast";
import { ShowPassword } from "./components/show-pwd-btn";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Credit } from "@/components/credit";

export default function Page() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const onSubmit = (values: FormValues) => {
    console.log(values);
    auth.storeCookie(values.email, values.password);
    dispatch(login());
    navigate("/products");
    toast({
      title: "Sign Up Success",
      description: "Your account has been created",
      className: "border-teal-500 text-teal-500",
      duration: 4000,
    });
  };

  return (
    <section className="overflow-y-hidden min-h-[calc(var(--vh,1vh)*100-75px)]">
      <Main>
        <div className="max-w-[435px] w-full absolute -translate-x-1/2 -translate-y-1/2 top-[48%] left-1/2">
          <div className="px-4">
            <div className="flex mb-2 bg-slate-500 p-2 rounded-md justify-between">
              {/* <Button
              className="rounded-none w-[50%] bg-slate-500 hover:underline"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button className="rounded-none w-[50%] bg-slate-400 hover:bg-opacity-100">
            Sign Up
            </Button> */}
              <div className="w-full h-8 cursor-default">
                <h1 className="text-xl text-center text-white">Sign Up</h1>
              </div>
            </div>
            <Card className="min-h-[300px]">
              <CardContent className="mt-5">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email" {...field} />
                          </FormControl>
                          <FormMessage className="absolute" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div>
                            <FormLabel>Password</FormLabel>
                            <ShowPassword />
                            <FormControl>
                              <Input
                                id="password"
                                type="password"
                                placeholder="password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="absolute mt-1" />
                          </div>
                        </FormItem>
                      )}
                    />
                    <div>
                      <Button className="w-full bg-slate-700 mt-4" type="submit">
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
      <Credit className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full px-2 pb-2" />
    </section>
  );
}
