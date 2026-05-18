import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "@/pages/HomePage";
import { CurriculumPage } from "@/pages/CurriculumPage";
import { LessonPage } from "@/pages/LessonPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { QuickStartPage } from "@/pages/QuickStartPage";
import { AboutPage } from "@/pages/AboutPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/curriculum" component={CurriculumPage} />
      <Route path="/curriculum/:slug" component={LessonPage} />
      <Route path="/category/:slug" component={CategoryPage} />
      <Route path="/quick-start" component={QuickStartPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
