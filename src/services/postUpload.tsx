import React, { useState } from "react";
import type { ContentType } from "../types/ContentType";
import type { ApiContentType } from "../types/ApiContentType";

const API_BASE_URL = "https://cbnncff2-7114.euw.devtunnels.ms/api";
let TagIdList: { id: number }[] = [];
const apitest = async (rawPost: ContentType) => {
  let allTags: { cimkeNev: string }[] = [];
  try {
    const response = await fetch(`${API_BASE_URL}/Cimkek`);

    if (!response.ok) {
      throw new Error("Failed to fetch tags");
    }

    allTags = await response.json();
    console.log(allTags);
  } catch (error) {
    console.error("Error:", error);
  }
  const checkIfTagExists = async (tagToCheck: string) => {
    try {
      if (
        allTags.some((tag: { cimkeNev: string }) => tag.cimkeNev === tagToCheck)
      ) {
        console.log("Van ilyen címke");
        return true;
      } else {
        console.log("Nincs ilyen címke");
        return false;
      }
    } catch (error) {
      console.error("Error uploading tag:", error);
    }
  };
  const uploadTag = async (token: string, tagToUpload: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Cimkek`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cimkeNev: tagToUpload }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };
  const login = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/Auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "balazs", password: "jelszav" }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }
      const data = await response.json();
      return data.accessToken;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  let TagIdList: { id: number }[] = [];
  if (rawPost.tags && rawPost.tags.length > 0) {
    for (let index = 0; index < rawPost.tags.length; index++) {
      for (let i = 0; i < allTags.length; i++) {
        if (allTags[i].cimkeNev == rawPost.tags[index]) {
          TagIdList.push({ id: i });
          break;
        }
      }
      if ((await checkIfTagExists(rawPost.tags[index])) == false) {
        uploadTag(await login(), rawPost.tags[index]);
        console.log("feltöltve");
      } else {
        console.log("nem kell feltölteni");
      }
    }
  }
  console.log(TagIdList);

  let postToUpload: ApiContentType = {
    nev: rawPost.title,
    cimkeIds: TagIdList.map(tag => +tag.id),
    elkeszitesiIdo: rawPost.lenght,
    hozzavalok: "sample",
    leiras: rawPost.description,
    nehezsegiSzint: rawPost.difficulty,
  };

  const uploadPost = async (token: string, postToUpload: ApiContentType) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Recept`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nev: postToUpload.nev,
          cimkeIds: postToUpload.cimkeIds,
          elkeszitesiIdo: postToUpload.elkeszitesiIdo,
          hozzavalok: postToUpload.hozzavalok,
          leiras: postToUpload.leiras,
          nehezsegiSzint: postToUpload.nehezsegiSzint,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }
      const data = await response.json();
      console.log(data);
      console.log("Sikeres feltöltés");
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };
  uploadPost(await login(), postToUpload);
};

export default apitest;
