CREATE TABLE public.urls

(
    short_url character varying(5000) COLLATE pg_catalog."default",
    long_url character varying(5000) COLLATE pg_catalog."default"
);

ALTER TABLE IF EXISTS public.urls
    OWNER to postgres;
