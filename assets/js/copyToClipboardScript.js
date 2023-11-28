function copyEmail()
{
    if(localStorage.getItem("language") == "es")
    {
        navigator.clipboard.writeText("contacto@abendiix.com");
    }
    else
    {
        navigator.clipboard.writeText("contact@abendiix.com");
    }
}