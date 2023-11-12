import { useState } from "react";
import { useForm } from "react-hook-form";
import { openai } from "@/lib/openai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function App() {
  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values) {
    setLoading(true);
    openai.chat.completions
      .create({
        messages: [{ role: "user", content: values.input }],
        model: "gpt-3.5-turbo",
      })
      .then((response) => {
        setAnswer(response.choices[0].message.content);
        setLoading(false);
      });
  }

  return (
    <main className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] px-4">
      <a href="https://platform.openai.com/playground" className="text-blue-500">OpenAI API Page</a>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="text-center">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-center">Enter your question</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300"
                    placeholder="for example... what is trpc in T3 stack?"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="mt-3 w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <div className="mt-5">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="text-center">{answer}</div>
        )}
      </div>
    </main>
  );
}

export default App;
